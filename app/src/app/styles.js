export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',
    height: '80vh',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'flex-start',
    heihgt: '100%'
  },

  aside: {
    order: '2',
    flex: '1 0 40%',
    alignSelf: 'flex-start',
    maxHeight: '80vh',
    height: '100%',
    overflow: 'hidden'
  },
  avatar: {},
  avatarImg: {
    width: '36px',
    height: '36px'
  },
  profileBlock: {
    display: 'flex',
    padding: '14px 4px 14px 16px',
    height: '60px'
  },
  profileBlockContent: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '14px'
  },
  profileBlockTitle: {
    fontSize: '14px',
    padding: '0',
    margin: '0'
  },
  profileBlockLocation: {
    padding: '0',
    margin: '0',
    fontSize: '12px',
  },
  commmentBlock: {
    padding: '0 16px',
    height: 'calc(100% - 120px)',
    overflow: 'auto'
  },
  commmentItem: {
    display: 'flex',
    paddingTop: '10px'
  },
  commmentItemContent:{
    fontSize: '14px',
    marginRight: 'auto',
    paddingRight: '10px'
  },
  commmentItemLink:{
    color: '#000',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '6px'
  },
  commentLink: {
    color: 'rgb(0, 55, 107)',
    textDecoration: 'underline'
  },
  likeBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    padding: '2px 16px',
  },
  likeBlockLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  likeBlockNumer: {
    fontSize: '14px',
    fontWeight: 'bold'
  },
  likeBlockPostAge: {
    fontSize: '12px',
    textTransform: 'uppercase',
    color: 'grey'
  },
  likeButton: {
    cursor: 'pointer'
  },
  likeButtonSmall: {
    width: '12px',
    cursor: 'pointer',
    flexShrink: '0'
  }

  
}
