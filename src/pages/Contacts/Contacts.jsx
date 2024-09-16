import FeedbackForm from "../../components/ContactsPage/FeedbackForm/FeedbackForm";
import css from "./Contatcs.module.css";

export default function Contacts() {
  return (
    <div className={css.container}>
      <FeedbackForm />
    </div>
  );
}
