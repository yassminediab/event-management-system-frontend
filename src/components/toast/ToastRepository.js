

export const TOAST_PROPERTIES = [
    {
        id: Math.floor((Math.random() * 101) + 1),
        title: 'Success',
        description: 'This is a success toast component',
        backgroundColor: '#5cb85c',
    },
    {
        id: Math.floor((Math.random() * 101) + 1),
        title: 'Danger',
        description: 'This is an error toast component',
        backgroundColor: '#d9534f',
    },
    {
        id: Math.floor((Math.random() * 101) + 1),
        title: 'Info',
        description: 'This is an info toast component',
        backgroundColor: '#5bc0de',
    },
    {
        id: Math.floor((Math.random() * 101) + 1),
        title: 'Warning',
        description: 'This is a warning toast component',
        backgroundColor: '#f0ad4e',
    }
];

export const BUTTON_PROPS = [
    {
        id: 1,
        type: 'success',
        className: 'success',
        label: 'Success'
    },
    {
        id: 2,
        type: 'danger',
        className: 'danger',
        label: 'Danger'
    },
    {
        id: 3,
        type: 'info',
        className: 'info',
        label: 'Info'
    },
    {
        id: 4,
        type: 'warning',
        className: 'warning',
        label: 'Warning'
    },
];
export default TOAST_PROPERTIES
