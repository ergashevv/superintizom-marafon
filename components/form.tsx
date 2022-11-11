const Form = ({ click, setClick }: any) => {
  return (
    <>
      <form className="submt-form">
        <div className="submit-form-inner">
          <label htmlFor="name">Ismingizni kiriting</label>
          <input id="name" placeholder="Ismingiz" type="text" />
          <label htmlFor="tel">Telefon raqamingizni kiriting</label>
          <input inputMode="tel" value="+998" id="tel" type="tell" />
          <button className="submit-btn">Davom etish</button>
          <button className="cancel" onClick={() => setClick(!click)}>Orqaga</button>
        </div>
      </form>
    </>
  );
};
export default Form;
