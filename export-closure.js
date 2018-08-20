let howdy = "howdy";

function closed_at_export() {
  console.log(howdy);
};

function closer() {
  closed_at_export();
};

module.exports = closer;
