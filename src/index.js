import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from "./components/Card";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Card title="First title" />
        <Card text="First text"/>
        <Card title="Second title" text="Second text"/>
    </>
);