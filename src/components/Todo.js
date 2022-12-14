// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, rgbToHex} from '@mui/system';
import { Paper, Button } from '@mui/material';


export default function Todo() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const textField={width:600}
    const [date,setDate]=useState('')
    const [description,setDescription]=useState('')
    const [todos,setTodos]=useState([])
    const handleclick=(e)=>{e.preventDefault()
        const todo={date,description}
        console.log(todo)
        fetch("http://localhost:8080/todo/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
             body:JSON.stringify(todo)
    }).then(()=>{
        console.log("New Task Added")
    })
    }
    useEffect(()=>{
        fetch("http://localhost:8080/todo/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setTodos(result);
        }
        )
    },[])
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Add In Your Task List</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Task date" variant="outlined" style={textField} 
      value={date} 
      onChange={(e)=>setDate(e.target.value)}
      /> 
      <TextField id="outlined-basic" label="Add a new task" variant="outlined" style={textField} 
      value={description} 
      onChange={(e)=>setDescription(e.target.value)}/>
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <Button variant="contained" color="success" onClick={handleclick}>
  Success
</Button>
    </Box>
    {date}<br/>
    {description}
    </Paper>
    <h1>My Task List</h1>
    <Paper elevation={3} style={paperStyle}>
        {todos.map(todo=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={todo.id}>
                Id:{todo.id}<br/>
                Date:{todo.date}<br/>
                Description:{todo.description}
                
                
                 </Paper>
        ))}


    </Paper>
    </Container>
  );
}