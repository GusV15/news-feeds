export const getDate = () => {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  if (day.toString().length === 1) {
    day = "0" + day;
  }
  if (month.toString().length === 1) {
    month = "0" + month;
  }
  return `${year}-${month}-${day}`;
};

export const categories = [
  { id: 1, category: "política" },
  { id: 2, category: "internacionales" },
  { id: 3, category: "tecnología" },
  { id: 4, category: "espectáculos" },
  { id: 5, category: "deportes" },
  { id: 6, category: "diseño" }
];
