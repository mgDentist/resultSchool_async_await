// Требуется переписать данный код, использующий 
// .then() и .catch(), 
// в код, который использует исключительно 
// async/await и try...catch:

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds = async (ids) => {
    try {
        const requests = ids.map( async (id) => { 
            const response = await fetch(`${TODOS_URL}/${id}`);
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            return response.json();
        });

        const todos = await Promise.all(requests);
        console.log(todos)
        
    } catch (error) {
        console.log(error);
    }
};

getTodosByIds([43, 21, 55, 100, 10]);

// Исходный код ниже:
//
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const getTodosByIds = (ids) => {
//     const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//     Promise.all(requests)
//         .then((responses) => {
//             const dataResults = responses.map((data) => data.json());
//             return Promise.all(dataResults)
//         })
//         .then((allTasks) => {
//             console.log(allTasks);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }
// getTodosByIds([43, 21, 55, 100, 10]);