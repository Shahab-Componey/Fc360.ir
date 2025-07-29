import {useEffect, useState} from "react";
import {fetchCompetitions} from "../services/competitionsService";

export function useCompetitions() {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchCompetitions()
      .then((data) => {
        console.log(data.data);
        setCompetitions(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return {competitions, loading, error};
}

export function useCompetition() {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchCompetitions()
      .then((data) => {
        console.log(data.data);
        setCompetitions(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return {competitions, loading, error};
}
