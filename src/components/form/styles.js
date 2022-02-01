import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {  
      margin:1,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField:{
    margin:"5px 0"
  },
  fileBase:{
    width: '97%',
    margin: '5px 0',
  },
  buttonsDiv:{
    margin:"10x",
    width:"10%"
  },
  buttonSubmit: {
    width:"97%",
    marginTop:"3px"
  },
  buttonClear:{
    display:"block",
    marginTop:"3px",
    marginBottom:"3px",
    width:"97%"
  }
}));

