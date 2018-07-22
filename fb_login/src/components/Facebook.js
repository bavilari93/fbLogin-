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
	}

	componentClicked = () =>{
		console.log("click")

	}

	render(){
		let fbContent;
		if (this.state.isLoggedIn){
			fbContent = null;
		}else{
			fbContent = (
				<FacebookLogin
    				appId="576310976103480"
    				autoLoad={true}
				    fields="name,email,picture"
				    onClick={this.componentClicked}
    				callback={this.responseFacebook} 
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
