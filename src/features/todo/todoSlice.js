import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:0,
        text:'this is a todo app',
        date: new Date().toLocaleDateString()
    }],
    isEdit:false,
    todoId:null,
    todoText:''
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action) => {
            const todo = {
                id:nanoid(),
                text:action.payload,
                date:new Date().toLocaleDateString()
            }

            state.todos.push(todo)
        },

        
        findTodoById:(state, action) => {
            state.isEdit = true
            let findTodo = state.todos.find((todo) => todo.id === action.payload)
            state.todoId = findTodo.id
            state.todoText = findTodo.text
            
        },

        updateTodo:(state, action) => {
            const isMatching = state.todos.find((todo) => todo.id === state.todoId)
            isMatching.text = action.payload
            isMatching.date = new Date().toLocaleDateString()

            state.isEdit = false
            state.todoId = null
            state.todoText = ''
        },


        removeTodo:(state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})


export const {addTodo, findTodoById, updateTodo ,removeTodo} = todoSlice.actions
export default todoSlice.reducer











// import {createSlice, nanoid} from '@reduxjs/toolkit'

// const initialState = {
//     todos:[{
//         id:1,
//         text:'hello text'
//     }],
//     isEdited:false,
//     EditedTodoId:null,
//     EditedTodo:''
// }

// export const todoSlice = createSlice({
//     name:'todo',
//     initialState,
//     reducers:{
//         addTodo:(state, action) => {
//             const todo = {
//                 id:nanoid(),
//                 text:action.payload
//             }

//             state.todos.push(todo);
//         },

//         editTodo:(state, action) => {
//             let findTodo = state.todos.find((todo) => todo.id === action.payload)
//             console.log(`todo: id ${findTodo.id} and todo  ${findTodo.text}`)
//         },

//         updateTodo:(state, action) => {
//             console.log("nothing")
//         }

//         removeTodo:(state,action)=>{
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            
//         }
      
//     }
// })

// export const {addTodo, editTodo ,removeTodo} = todoSlice.actions;

// export default todoSlice.reducer