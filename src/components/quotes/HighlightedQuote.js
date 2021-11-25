import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  console.log('text', props.text);
  console.log('author', props.author);
  return (
    <figure className={classes.quote}>
      
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
