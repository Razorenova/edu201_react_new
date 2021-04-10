import React from 'react';

export class AddPost extends React.Component{
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm =  this.sendForm.bind(this);
        this.state = {
            title:"",
            text:"",
            author:""
        }
    }
    sendForm(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append( "title", this.state.title)
        formData.append( "text", this.state.text)
        formData.append( "author", this.state.author)
        fetch("http://v90377xk.beget.tech/pre/php/addPost.php", {
           method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                console.log(result)
            })
    }
    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState( {
            [name]:value
        });
    }
    render() {
        return <div className="col-md-5 my-5 mx-auto">
            <h1 className="text-center my-3">Добавление поста</h1>
        <form onSubmit={this.sendForm}>
            <div className="mb-3">
                <input value={this.state.title} onChange={this.handleInputChange} name="title" type="text" className="form-control" placeholder="Заголовок статьи"/>
            </div>
            <div className="mb-3">
                <textarea value={this.state.text} onChange={this.handleInputChange} name="text" type="text" className="form-control" placeholder="Текст поста"/>

            </div>
            <div className="mb-3">
                <input value={this.state.author} onChange={this.handleInputChange} name="author"type="text" className="form-control" placeholder="authtor"/>
            </div>
            <div className="mb-3">
                <input type="submit" className="form-control btn btn-primary" value="Добавить"/>
            </div>
        </form>
        </div>
    }
}