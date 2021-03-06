import express, { Request, Response, NextFunction } from 'express';
import { GameHandler } from "./server/game-handler";

const app = express();

const gameHandler = new GameHandler();

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
	res.render('index.html');
});

app.get('/api/getScores', (req: Request, res: Response) => {
	return res.status(200).json(gameHandler.getScores());
});

app.post('/api/submitEntry', (req: Request, res: Response, next: NextFunction) => {
	try {
		return res.status(201).json(gameHandler.submitEntry(req.body));
	}
	catch (e) {
		next(e);
	}
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	switch (err.name) {
		case 'BadRequest':
			res.status(400).json({ message: `${err.name}: ${err.message}` });
			break;
		default:
			res.status(500).json({ message: `${err.name}: ${err.message}` });
			break;
	}
});

const port = 3000;
app.listen(port, function () {
	console.log('Server', process.pid, 'listening on port', port);
});
