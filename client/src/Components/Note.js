import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display : grid;
  place-items : center center;
  font-size : 12px;
  
`
const Grid = styled.div`
  display : grid;
  grid-gap : 20px;
  place-items : center center;
`
const Border = styled.div`
  font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height : 110px;
  width : 430px;
  border-radius : 6px;
  display : grid;
  place-items : center center;
  border : 1px solid black;
`

const Note = ({notes}) => {
  return(
  <Wrapper>
    <Grid>
      {notes.map((note,index)=>{
        return(
          <Border key={index}>   
            <h2>{note.title}</h2>
            <p>{note.text}</p>
          </Border>)}
      )}
    </Grid>
  </Wrapper>
  );
  
}

export default Note;