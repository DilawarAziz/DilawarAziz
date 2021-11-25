import React from 'react'
// import app from './firebase'
// import {getDatabase,update, ref,get, push, set,remove ,child} from "firebase/database";
import {connect} from 'react-redux'
import img from './img.jpg'
 function Profile(props) {
   
 
     
  
    // console.log(props.user)
    return (
        <>
   <div className="profilemain">
       <div className="profilechild">
            <div className="profiledata">
              <ul>
               <h1 className="proheading">YOUR PROFILE</h1> 
               <li> <h2> USERNAME:</h2></li>
                <h4><u> {props.user.name}</u></h4>
                <li> <h2>EMAIL:</h2></li>
                <h4><u> {props.user.password}</u></h4>
                <li>  <h2>ADDRESS:</h2></li>
                <h4><u> {props.user.Address}</u></h4>
                <li>  <h2>CITY:</h2></li>
                <h4><u> {props.user.City}</u></h4>
                </ul>
            </div>
            <div className="imgparent">
                <img className="profileimg" width="350" height="350" src={img} alt="" />
            </div>
            </div>
        </div>
        </>
    )
}
const mapStateToProps = (state)=>({
    user :state.users,
    
  })
//   const mapDispatchToProps = (dispatch)=>({
//     foo :(user)=>dispatch(foo(user))
  
//   })
  export default connect(mapStateToProps,null)( Profile);
  
  