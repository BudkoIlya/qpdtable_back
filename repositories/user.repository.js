import db from "../db";

export class NotFoundError extends Error {
  constructor(message = "Line doesn't exist") {
    super(message);
    this.name = "NotFoundError";
  }
}

const CheckExistence = async (id) => {
  const line = await db.query("SELECT * FROM line where id = $1", [id]);
  console.log("isExist", line.rows);
  return line.rows.length > 0;
};

export const getLine = async () => {
  return await db.query("SELECT * FROM line");
};
export const deleteLine = async (id) => {
  const isExist = await CheckExistence(id);
  if (isExist) {
    await db.query("DELETE FROM line where id = $1", [id]);
    return { id };
  } else {
    throw new NotFoundError();
  }
};
export const updateLine = async (id, name, value) => {
  const isExist = await CheckExistence(id);
  if (isExist) {
    const line = await db.query(
      "UPDATE line set name = $1, value = $2 where id = $3 RETURNING *",
      [name, value, id]
    );
    return line.rows[0];
  } else {
    throw new NotFoundError();
  }
};
export const createLine = async (name, value) => {
  const line = await db.query(
    `INSERT INTO line (name, value) values ($1, $2) RETURNING *`,
    [name, value]
  );
  return line.rows[0];
};
