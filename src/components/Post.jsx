import React from 'react';

export class Post extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
             title: "Тут будет заголовок",
            text: "",
            data_added: "",
            author: ""
        }
    }

    componentDidMount() {

        const formData = new FormData();
        formData.append("id", this.props.match.params.id);
        fetch("http://v90377xk.beget.tech/pre/php/getPost.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                 this.setState({
                    title: result.title,
                    text: result.text,
                    data_added: result.data_added,
                    author: result.author
                })
            })
    }

    render(){
        return <div>
            <h1 className="text-center">{this.state.title}</h1>
            <p>{this.state.text}</p>
            <p>Добавлено: {this.state.data_added}</p>
            <p>Автор:{this.state.author}</p>
        </div>
    }
}

