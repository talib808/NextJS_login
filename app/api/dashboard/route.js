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

export async function GET() {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(`
      SELECT TOP 5 EmpID, Name, DelCenter FROM Main 
      WHERE isActive=1 AND TeamID=1
    `);

    return NextResponse.json(result.recordset);
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: error.message,
    });
  }
}
