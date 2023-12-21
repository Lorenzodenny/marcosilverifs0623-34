import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import CommentList from './CommentList';

class CommentArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commenti: [],
      isLoading: true,
      isError: false,
    };
  }

  getCommenti = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/books/${this.props.id}/comments/`,
      {
        headers: {
          "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZGYxYzBkOGEyMDAwMThhNDhiOTUiLCJpYXQiOjE3MDMxNjM5OTYsImV4cCI6MTcwNDM3MzU5Nn0.K8Itj6dcL-vLnbO1f-CoM_v7Ecfc9kofySv0tjX7TwI"
        },
      }
    ).then((res) => {
        if (res.ok) {
            return res.json()
        }else{
            throw new Error ('Errore nel recupero commenti')
        }
    }).then((data) => {
        this.setState({
            commenti: data,
            isLoading: false,
        })
    }).catch(error => {
        console.log("ERRORE", error)
        this.setState({
                isLoading: false,
                isError:true,
            })
        })
  };

  componentDidMount() {
    this.getCommenti()
  }
  render() {
    console.log(this.state.commenti)
    return(
        <div>
            <CommentList comments = {this.state.commenti} />
        </div>
    )
  }

}

export default CommentArea;
