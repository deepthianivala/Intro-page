import './Emails.css';
function Emails() {
  const placeholder="  Your e-mail address";
  return (
    <forms >
      <input type="text" id='emailblock' placeholder={placeholder}/>
    </forms>
  );
}
export default Emails;