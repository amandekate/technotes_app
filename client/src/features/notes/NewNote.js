import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./NewNoteForm";
import { isEmpty, isUndefined } from "lodash";


const NewNote = () => {
  const users = useSelector(selectAllUsers);

  if (!users?.length) return <p>Not Currently Available</p>

  const content = <NewNoteForm users={users} />
  
  // const content =
  //   !isEmpty(users) && !isUndefined(users) ? (
  //     <NewNoteform users={users} />
  //   ) : (
  //     <p>Loading...</p>
  //   );

  return content;
};

export default NewNote;
