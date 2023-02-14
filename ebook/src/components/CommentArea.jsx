import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea=props=>{
 
    const[comments,setComments]=useState([]) 
    const[isLoading,setIsLoading]=useState(false) 
    const[isError,setIsError]=useState(false)

    const componentDidUpdate = props=>{
      useEffect(()=>{async (prevProps) => {
        if (prevProps.asin !== props.asin) {
          setIsLoading(true)
          try {
            let response = await fetch(
              'https://striveschool-api.herokuapp.com/api/comments/' +
                props.asin,
              {
                headers: {
                  Authorization: 'Bearer your-auth-token-goes-here',
                },
              }
            )
            console.log(response)
            if (response.ok) {
              let comments = await response.json()
             
                setComments(comments),
                setIsLoading(false),
                setIsError(false)
            }
            } else {
              console.log('error')
            setIsLoading(false, isError:true)
            }
          } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
          }
        }
      }
    

      })
    } 
  
    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  })

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization: ' your-auth-token-goes-here',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  
  
   
}

export default CommentArea
