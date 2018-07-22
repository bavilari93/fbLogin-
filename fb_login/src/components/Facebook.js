import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component{
	state={
		isLoggedIn:false,
		UserID:'', 
		name:'', 
		email:'', 
		picture:''
	}

	responseFacebook = response =>{
		console.log(response)
		this.setState({
			isLoggedIn:true,
			UserID:response.UserID,
			name:response.name,
			email:response.email,
			picture:response.picture.data.url
		})
	}

	componentClicked = () =>{
		console.log("click")

	}

	render(){
		let fbContent;
		if (this.state.isLoggedIn){
			fbContent = (
				<div className="fb-content">
					<img scr={this.state.picture} alt={this.state.name}/>
					<h2> welcome {this.state.name}</h2>
					<p> {this.state.email}</p>
				</div>);
		}else{
			fbContent = (
				<FacebookLogin
    				appId="576310976103480"
    				autoLoad={true}
				    fields="name,email,picture"
				    onClick={this.componentClicked}
    				callback={this.responseFacebook} 
    				cssClass="my-facebook-button-class"
    				icon="fa-facebook"
    		    />
    		)
		}
		return(
			<div>
				{fbContent}
			</div>
			)
	}
} 


export default Facebook;
