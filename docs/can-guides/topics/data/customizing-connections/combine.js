import { DefineMap, QueryLogic, connect } from "//unpkg.com/can@5/core.mjs";

const Todo = DefineMap.extend({
	id: {
		identity: true,
		type: "number"
	},
	userId: 'number',
	title: "string",
	completed: "boolean"
});

const behaviors = [
	connect.base,
	connect.dataUrl,
	connect.dataParse,
	connect.constructor,
];

const connectionOptions = {
	url: 'https://jsonplaceholder.typicode.com/todos/{id}',
	queryLogic: new QueryLogic(Todo)
};

const connection = behaviors.reduce((connection, behavior) => behavior(connection), connectionOptions);
connection.init();

connection.get({id: 5}).then((result) => {
	console.log(`Fetched A Todo: `, result);
});