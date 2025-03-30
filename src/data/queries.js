export const queries = [
    {
        id: '1',
        name: 'Select All Employees',
        query: 'SELECT * FROM employees;',
        data: [
            { id: 1, name: 'Alice', department: 'HR' },
            { id: 2, name: 'Bob', department: 'Engineering' }
        ]
    },
    {
        id: '2',
        name: 'Select All Departments',
        query: 'SELECT * FROM departments;',
        data: [
            { id: 1, department: 'HR' },
            { id: 2, department: 'Engineering' },
            { id: 3, department: 'Sales' }
            
        ]
    },
    {
        id: '3',
        name: 'Select All Products',
        query: 'SELECT * FROM products;',
        data: [
            { id: 1, name: 'Laptop', category: 'Electronics' },
            { id: 2, name: 'Chair', category: 'Furniture' }
        ]
    }
];