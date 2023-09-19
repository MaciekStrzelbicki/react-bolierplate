import { useCallback, useEffect, useState } from "react";
import { SwApi } from "../../swApi";
import { SwApiPerson } from "../../swApi.types";

export const useSwPerson = (personId: string) => {
  const [person, setPerson] = useState<SwApiPerson>();

  const fetchData = useCallback(async () => {
    const swApi = SwApi.getInstance();
    const person = await swApi.getPerson(personId);
    setPerson(person);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  return person;
};
