import React from 'react';

export class AddPost extends React.Component{
    constructor() {
        super();
        this.state = {}
    }
    sendForm(event){
        event.preventDefault();
        console.log("Отправка формы");
        console.log(event);
    }
    handleInputChange(event){
        console.log(event);
        const value = event.target.value;
        const name = event.target.name;
    }
    render() {
        return <div className="col-md-5 my-5 mx-auto">
            <h1 className="text-center my-3">Добавление поста</h1>
        <form onSubmit={this.sendForm}>
            <div className="mb-3">
                <input onChange={this.handleInputChange} name="title" type="text" className="form-control" placeholder="Заголовок статьи"/>
            </div>
            <div className="mb-3">
                <textarea type="text" className="form-control" placeholder="Текст поста"/>

            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="authtor"/>
            </div>
            <div className="mb-3">
                <input type="submit" className="form-control btn btn-primary" value="Добавить"/>
            </div>
        </form>
        </div>
    }
}