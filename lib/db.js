import sql from 'mssql';

const config = {
    user: 'tooltest',
    password: 'tooltest',
    database: 'ToolTest',
    server: 'MTTL-ISUPPORT',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
};

export const dbConnect = async () => {
    try {
        await sql.connect(config);
    } catch (err) {
        console.error("Database connection error:", err);
    }
};
