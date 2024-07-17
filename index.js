import express from "express";
import mysql from "mysql2";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "%xCn#4fTy*EmJU8p",
//   database: "test",
// });
const db = mysql.createConnection({
  host: "192.168.0.117",
  user: "root",
  password: "passwordsAreSecrets",
  database: "brandfortunes",
  port:3305
});

// db.connect((err) => {
//   if (err) {
//     console.error('error connecting:', err);
//     return;
//   }
//   console.log('connected as id ' + db.threadId);
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
