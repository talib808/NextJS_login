
import { NextResponse } from 'next/server';
import sql from 'mssql'; 

const config = {
  user: 'tooltest',
  password: 'tooltest',
  server: 'MTTL-ISUPPORT',
  database: 'ToolTest',
  options: {
    trustServerCertificate: true,
  },
};

export async function POST(request) {
  const { username, password } = await request.json();

  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('UserName', sql.VarChar, username)
      .input('Password', sql.VarChar, password)
      .query(`
        SELECT EmpID, Name, DelCenter FROM Main 
        WHERE isActive=1 AND username=@tooltest AND password=@tooltesttrustServerCertificate=true
      `);

    const user = result.recordset[0];

    if (user) {
      return NextResponse.json({
        status: 'success',
        user,
      });
    } else {
      return NextResponse.json({
        status: 'error',
        message: 'Invalid credentials',
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: error.message,
    });
  }
}









// import { NextResponse } from 'next/server';
// import sql from '../../../lib/db';

// export async function POST(req) {
//   const { username, password } = await req.json();

//   const query = `
//     SELECT EmpID, Name, DelCenter
//     FROM Main
//     WHERE isActive=1 AND username=@tooltest AND password=@tooltesttrustServerCertificate=true
//   `;
//   const result = await sql.query(query, { username, password });

//   if (result.recordset.length === 1) {
//     const user = result.recordset[0];
//     return NextResponse.json({ status: 'success', user });
//   } else {
//     return NextResponse.json({ status: 'error', message: 'Invalid credentials' });
//   }
// }


