import { useHistory } from 'react-router-dom'
import firebase from '../../fire'

export const LoginAction = (email, password) => {
    return function (dispatch) {
        dispatch({ type: "LOGIN_PROCESSING" })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                firebase.firestore().collection('users').where( "uid", "==", res.user.uid).get()
                .then(useobj => {
                    useobj.forEach((resule) => {
                        var data = resule.data()
                        console.log("useobj", data)
                        dispatch({ type: "LOGIN_PROCESSED", payload: data })
                        alert("Login Succesfully")
                    })
                })
            })
            .catch((Err) => {
                dispatch({ type: "ERROR" })
            })
    }
}

export const SingupAction = (email, password ,name, phone, username) => {
    return function (dispatch) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                var obj = {
                    uid: res.user.uid,
                    email: res.user.email,
                    phone: phone,
                    name: name,
                    username: username
                }
                console.log(obj)
                firebase.firestore().collection('users').add(obj)
                .then((databaseRes) => {
                    console.log("databaseRes",databaseRes)
                })
                alert("Signup Succesfully")
                resolve({status: true})
                // history.push("/home")

            })
            .catch((err) => {
                console.log("error", err)
                alert(err.message)
                reject({status: false})
            })
        })
    }
}
