import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Louis from './profil/1.jpg';
import Vivien from './profil/2.jpg'
import Ankhmaa from './profil/3.jpg'


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profiles: [{
            nom: 'FIEUX',
            prenom: 'Louis',
            ddn: '4 fevrier 1999',
            pp: Louis,
            background: "grey",
            post: "Qui est chaud pour sortir le skeat ce soir?",
            super: 0
          },
          {
            nom: 'DETOURNAY',
            prenom: 'Vivien',
            ddn: '12 fevrier 1999',
            pp: Vivien,
            background: "grey",
            post: "Venez rejoindre l'ITeam cette année! Vous n'allez pas le regretter!",
            super: 0
          },
          {
            nom: 'FIEUX',
            prenom: 'Ankhmaa',
            ddn: '11 decembre 1999',
            pp: Ankhmaa,
            background: "grey",
            post: "I'm not chinese !!!",
            super: 0
          }
        ],
        idUser: 0,
        button: true
    };
  }

  handleClick(i) {
    this.setState(
        {
          idUser: i
        }
    );
  }

  changecolor(){
    if(this.state.background==="grey"){
      this.setState(
      {
        background:"white"
      });}
    else {
      this.setState(
      {
        background:"grey"
      });}
    }

  increaseSuper(index){
      let profiles = [ ...this.state.profiles ];
      profiles[this.state.idUser] = {...profiles[this.state.idUser], super: profiles[this.state.idUser].super+1};
      this.setState({ profiles });

  }
  headerRender(){

  }
  render() {
    return (
        <div class="card border-0">
         <div class="card-header border-0" >
          <div class="btn-toolbar float-right" role="group">
            <button  type="button" class="btn btn-secondary" onClick={() => this.handleClick(0)}>{this.state.profiles[0].prenom}</button>
            <button  type="button" class="btn btn-secondary" onClick={() => this.handleClick(1)}>{this.state.profiles[1].prenom}</button>
            <button  type="button" class="btn btn-secondary" onClick={() => this.handleClick(2)}>{this.state.profiles[2].prenom}</button>
           </div>
          </div>

          <article>
            <div class="container">
              <div class="card-body-main card border-primary mb-3" style={{background : this.state.background}} >
                <ProfilImage img={this.state.profiles[this.state.idUser].pp}/>
                <div class="row">
                  <div class="col"> <ProfilDescription title="Prénom" content={this.state.profiles[this.state.idUser].prenom}/>  </div>
                  <div class="col"> <ProfilDescription title="Nom" content={this.state.profiles[this.state.idUser].nom}/>  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <ProfilDescription title="Date de naissance" content={this.state.profiles[this.state.idUser].ddn}/>
                    <button class="btn btn-primary float-right" onClick={()=> this.changecolor()}>Changer style</button>
                  </div>
                </div>
              </div>
            </div>
          </article>

           <div class="card border-0">
                <div class="card-body-second card border-primary mb-3">
                  <div class="col">
                    <Publication publi={this.state.profiles[this.state.idUser].post}/>
                  </div>
                <button onClick={this.increaseSuper.bind(this)} class="btn-super btn-primary">&#128077; Super -{this.state.profiles[this.state.idUser].super}- </button>
                </div>
             </div>
           </div>

    );
  }
}

class Publication extends React.Component{
    render() {
        return(
               <p>{this.props.publi}</p>
        );
    }
}

class ProfilImage extends React.Component{
    render() {
        return(
          <div class="card-img border-0" >
            <img src={this.props.img} class="profil" alt="Photo de profil"/>
          </div>
        );
    }
}

class ProfilDescription extends React.Component{
    render() {
        return(
            <div>
                <strong>{this.props.title}</strong>
                  <div class="col">
                    {this.props.content}
                  </div>
            </div>
        );
    }
}

export default Profile;
