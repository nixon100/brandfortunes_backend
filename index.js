import express from "express";
import mysql from "mysql2";
import cors from "cors";
import multer from "multer";
import requestIp from "request-ip";

const upload = multer();
const app = express();
app.use(cors());
app.use(express.json());
app.use(requestIp.mw());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "%xCn#4fTy*EmJU8p",
  database: "test",
});

app.get("/ll", function (req, res) {
  console.log(req.socket.remoteAddress);
  console.log(req.ip);
  console.log(req.port);
  const clientIp = requestIp.getClientIp(req);
  console.log(clientIp);
  res.send("your IP is: " + req.ip + req.socket.remoteAddress);
});

// const allowedIPs = ['::ffff:172.19.0.3'];

// app.use((req, res, next) => {
//   // const clientIp = req.ip || req.headers['x-forwarded-for'];
//   // const clientIp = req.ip;
//   // console.log(clientIp)
//   fetch('https://api.ipify.org/')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

//   if (allowedIPs.includes(data)) {
//     next();
//   } else {
//     res.status(403).send('Access denied');
//   }
// });

// const allowedIPs = ['192.168.1.100', '192.168.1.101'];
// const allowedIPs = ['::1'];

// app.use((req, res, next) => {
//   const clientIp = req.ip || req.headers['x-forwarded-for'];
//   console.log(clientIp)
//   if (allowedIPs.includes(clientIp)) {
//     next();
//   } else {
//     res.status(403).send('Access denied');
//   }
// });

// const firewall = (req, res, next) => {
//   const allowedIps = ['192.168.1.100', '192.168.1.200']; // allowed IP addresses
//   const allowedPorts = [8800, 8081]; // allowed ports

//   const ip = req.ip;
//   const port = req.port;
// console.log(ip)
// console.log(port)
//   if (allowedIps.includes(ip) && allowedPorts.includes(port)) {
//     next(); // allow the request to proceed
//   } else {
//     res.status(403).send('Forbidden'); // block the request
//   }
// };

// app.use(firewall);

// SELECT test.table1.ROLL_NO,test.table2.COURSE_ID,test.table3.SUBJECT , test.table3.MARK
//   FROM test.table1
//   JOIN test.table2
//   ON test.table1.ROLL_NO = test.table2.ROLL_NO
//   JOIN test.table3
//   ON test.table2.COURSE_ID = test.table3.COURSE_ID
///////////////////////////////////////////////////////////////////   ///////////////////////////////////////
// const allowedIps = ['192.168.1.100', '192.168.1.200'];
// app.use((req, res, next) => {
//   app.post("/auth", (req, res) => {
//     // req.body contains the request body
//     const ip = req.body;
//     console.log(ip)
//     // Do something with the data, e.g., save it to a database
//     // res.send(`User created: ${name} (${age})`);
//     if (ip == "192.168.1.100") {
//       next();
//     } else {
//       res.status(403).send("Access denied");
//     }
//   });

// });
app.use((req, res, next) => {
  const ip = req.ip; // Get the IP from the request object
  console.log(ip);

  if (ip === "192.168.1.100") {
    next();
  } else {
    res.status(403).send("Access denied"+ip);
  }
});

  app.post("/auth", (req, res) => {
    // req.body contains the request body
    const ip = req.body;
    console.log(ip)
    // Do something with the data, e.g., save it to a database
    // res.send(`User created: ${name} (${age})`);
    if (ip == "192.168.1.100") {
      console.log(ip)
    } else {
      res.status(403).send("Access denied");
    }
  });







app.get("/table-join", (req, res) => {
  const q = `call test.get_student_marks()`;
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
// const db = mysql.createConnection({
//   host: "192.168.0.117",
//   user: "root",
//   password: "passwordsAreSecrets",
//   database: "brandfortunes",
//   port: 3305,
// });
///////////////////////////////
// db.connect((err) => {
//   if (err) {
//     console.error('error connecting:', err);
//     return;
//   }
//   console.log('connected as id ' + db.threadId);
// });

// const json = [
//   {
//     MRP: 5858,
//     Category: "sssss",
//     gender: "gggggggg",
//     "Customer Returns": 0.2,
//     RTO: 0.07,
//     "Payment Realized": 1500.2,
//     Discount: "0",
//     ASP: "0",
//   },
//   {
//     MRP: 5858,
//     Category: "BBBBBBBBBBB",
//     gender: "GGGGGGGGGGGGGGG",
//     "Customer Returns": 0.2,
//     RTO: 0.07,
//     "Payment Realized": 1500.2,
//     Discount: "0",
//     ASP: "0",
//   },
//   {
//     MRP: 585,
//     Category: "KKKKKKKKK",
//     gender: "MMMMMMMMMMMMMMM",
//     "Customer Returns": 0.2,
//     RTO: 0.07,
//     "Payment Realized": 1500.2,
//     Discount: "0",
//     ASP: "0",
//   },
//   {
//     MRP: 5858,
//     Category: "PPPPPPPPPPPPPPPPPPPPPP",
//     gender: "MMMMMMMMMMMMMMMMMMMMMMMMM ",
//     "Customer Returns": 0.2,
//     RTO: 0.07,
//     "Payment Realized": 1500.2,
//     Discount: "0",
//     ASP: "0",
//   },
// ];
////OPTION 1
// const query = {
//   // sql: 'INSERT INTO users SET?',
//   sql: 'INSERT INTO `brandfortunes`.`testt` SET?',
//   values: [json]
// };
// db.query(query, (err, results) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(results);
//   }
// });

/////OPTION 2

// app.post("/query", (req, res) => {
//   const values = json.map((obj) => Object.values(obj));
//   const placeholders = json.map(() => "(?,?,?,?,?,?,?,?)").join(", ");
//   const query = `INSERT INTO \`brandfortunes\`.\`testt\` VALUES ${placeholders}`;
//   db.query(query, values.flat(), (err, results) => {
//     if (err) {
//       console.error(err);
//       return res.json(err);
//     } else {
//       console.log(query);
//     }
//   });
// });

///////////////testing/////////////////
app.get("/testingdatabase", (req, res) => {
  const q = "SELECT * FROM test.referencevaluea";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

///////////////////////////////////////////////////////////////////////
app.post("/upload", (req, res) => {
  const { data, ref } = req.body;
  if (data.length > 0) {
    console.log(data, ref);
    // console.log(json.get('selectedValue'))
    const values = data.map((obj) => Object.values(obj));
    const placeholders = data.map(() => "(?,?,?,?)").join(", ");
    const query = `INSERT INTO ${ref} VALUES ${placeholders}`;
    db.query(query, values.flat(), (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error inserting data" });
      } else {
        // console.log(query);
        res.json({ message: "Data inserted successfully" });
      }
    });
  } else {
    res.status(500).json({ message: "Error inserting data" });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////

// app.post("/upload", (req, res) => {
// if (req.body.length > 0) {
//   db.query(`DROP TABLE IF EXISTS myntra_reversefees22`, (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error dropping table' });
//       return;
//     }

//   const json = req.body; // assuming the data is sent in the request body
//   const create = `CREATE TABLE IF NOT EXISTS myntra_reversefees22 (
//     Reverse_Logistics_CPU VARCHAR(512),
//     __EMPTY INT,
//     __EMPTY_1 INT,
//     __EMPTY_2 INT
//   )`;

//   // Create the table only if it doesn't exist
//   db.query(create, (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error creating table' });
//     } else {
//       // if(json.length > 0) {
//         const values = json.map((obj) => Object.values(obj));
//         const placeholders = json.map(() => "(?,?,?,?)").join(", ");
//         const query = `INSERT INTO myntra_reversefees22 VALUES ${placeholders}`;
//         db.query(query, values.flat(), (err, results) => {
//           if (err) {
//             console.error(err);
//             res.status(500).json({ message: 'Error inserting data' });
//           } else {
//             console.log(query);
//             res.json({ message: 'Data inserted successfully' });
//           }
//         });
//       //  } else {
//       //   res.json({ message: 'Table created successfully, but no data to insert' });
//       // }
//     }
//   });
// })
// }else {
//   res.json({ message: 'file not exist' });
// }
// });

// app.post("/upload", (req, res) => {
//   const json = req.body; // assuming the data is sent in the request body
//   const values = json.map((obj) => Object.values(obj));
//   const placeholders = json.map(() => "(?,?,?,?,?,?,?,?)").join(", ");
//   const query = `INSERT INTO brandfortunes.testt VALUES ${placeholders}`;
//   db.query(query, values.flat(), (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error inserting data' });
//     } else {
//       console.log(query);
//       res.json({ message: 'Data inserted successfully' });
//     }
//   });
// });

app.get("/testingdatabase", (req, res) => {
  const q = "SELECT * FROM brandfortunes.testt";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/myncom", (req, res) => {
  const q = "SELECT * FROM brandfortunes.myntra_com";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/flipfix", (req, res) => {
  const q = "SELECT * FROM brandfortunes.flipkart_fixedfees";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/flipcoll", (req, res) => {
  const q = "SELECT * FROM brandfortunes.flipkart_collectionfees";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/flipship", (req, res) => {
  const q = "SELECT * FROM brandfortunes.flipkart_shippingfees";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/fliprevship", (req, res) => {
  const q = "SELECT * FROM brandfortunes.flipkart_reverseshippingfees";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/flipdata", (req, res) => {
  const q = "SELECT * FROM brandfortunes.flipkart_data";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/mynfor", (req, res) => {
  const q = "SELECT * FROM brandfortunes.myntra_forwardfees";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/mynrev", (req, res) => {
  const q = "SELECT * FROM brandfortunes.myntra_reversefees";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/calmyndetails", (req, res) => {
  const q = "SELECT * FROM brandfortunes.myntra_details";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/calmyncommission", (req, res) => {
  const q = "SELECT * FROM brandfortunes.myntra_commission";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/calmynfor", (req, res) => {
  const q = "SELECT * FROM brandfortunes.myntra_forwardfees";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/amazondata", (req, res) => {
  const q = "SELECT * FROM brandfortunes.amazon_data";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/amazonclosingfees", (req, res) => {
  const q = "SELECT * FROM brandfortunes.amazon_closingfees";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/amazonclosingfees1", (req, res) => {
  const q = "SELECT * FROM brandfortunes.amazon_closingfees1";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/amazonclosingfees2", (req, res) => {
  const q = "SELECT * FROM brandfortunes.amazon_closingfees2";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/amazonshippingfees", (req, res) => {
  const q = "SELECT * FROM brandfortunes.amazon_shippingfees";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
