import React, {useEffect, useState} from "react";
import {db} from "../../firebase";
import {doc, getDoc} from "firebase/firestore";

// componente
import CategoryContainer from "../../components/Container/CategoryContainer/CategoryContainer";

const Catalogo = ({match}) => {
  const [categoryTitle, SetCategoryTitle] = useState("");
  let idCategory = match.params.id;
  useEffect(() => {
    const request = async () => {
      try {
        const sql = doc(db, "category", idCategory);
        const category = await getDoc(sql);
        SetCategoryTitle(category.data().name);
      } catch (error) {
        console.log(error.message);
      }
    };
    request();
  }, [idCategory]);
  return (
    <>
      <CategoryContainer id={idCategory} title={categoryTitle} />
    </>
  );
};

export default Catalogo;
