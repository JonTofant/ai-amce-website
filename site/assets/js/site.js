/* Draws the milestone list, the Gantt chart and the home page "Coming up" list from schedule.js. */
(function () {
  var data = window.AMCE_SCHEDULE;
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var WP_NAMES = {
    2: "WP2 · Exercise framework and supported hardware",
    3: "WP3 · AI recommendation system",
    4: "WP4 · Implementation, validation and testing",
    5: "WP5 · Dissemination and training"
  };
  var STATUS_TEXT = { done: "Done", active: "In progress", upcoming: "Planned" };

  function parse(iso) {
    var p = iso.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function fmt(d) {
    return d.getDate() + " " + MONTHS[d.getMonth()] + " " + d.getFullYear();
  }
  function fmtRange(startIso, endIso) {
    var a = parse(startIso), b = parse(endIso);
    if (a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()) {
      return a.getDate() + "–" + fmt(b);
    }
    return fmt(a) + " – " + fmt(b);
  }
  function statusOf(startIso, endIso) {
    if (parse(endIso) < today) return "done";
    if (parse(startIso) <= today) return "active";
    return "upcoming";
  }
  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }
  function milestoneDate(m) {
    if (m.label) return m.label;
    return m.endDate ? fmtRange(m.date, m.endDate) : fmt(parse(m.date));
  }
  function milestoneItem(m) {
    var status = statusOf(m.date, m.endDate || m.date);
    var li = el("li", status);
    li.style.setProperty("--c", "var(--wp" + m.wp + ")");
    li.appendChild(el("span", "when", milestoneDate(m)));
    li.appendChild(el("span", "dot"));
    var what = el("div", "what");
    what.appendChild(el("b", null, m.title));
    what.appendChild(el("span", null, "WP" + m.wp + (m.note ? " · " + m.note : "")));
    li.appendChild(what);
    return li;
  }

  var next = document.getElementById("coming-up");
  if (next) {
    data.milestones
      .filter(function (m) { return parse(m.endDate || m.date) >= today; })
      .slice(0, 3)
      .forEach(function (m) { next.appendChild(milestoneItem(m)); });
  }

  var rail = document.getElementById("milestones");
  if (rail) {
    var year = null;
    data.milestones.forEach(function (m) {
      var y = m.date.slice(0, 4);
      if (y !== year) {
        year = y;
        rail.appendChild(el("h3", "year-mark", y));
        var list = el("ol", "rail");
        list.setAttribute("aria-label", "Milestones in " + y);
        rail.appendChild(list);
      }
      rail.lastChild.appendChild(milestoneItem(m));
    });
  }

  var gantt = document.getElementById("gantt");
  if (gantt) {
    var from = parse(data.rangeStart).getTime();
    var to = parse(data.rangeEnd).getTime();
    var pct = function (t) { return ((t - from) / (to - from)) * 100; };

    var years = el("div", "gantt-years");
    years.appendChild(el("div"));
    var ruler = el("div", "ruler");
    for (var y = parse(data.rangeStart).getFullYear(); y <= parse(data.rangeEnd).getFullYear(); y++) {
      var left = Math.max(0, pct(new Date(y, 0, 1).getTime()));
      if (left >= 99) continue;
      var tick = el("span", "y", String(y));
      tick.style.left = left + "%";
      ruler.appendChild(tick);
      if (left > 0) {
        var guide = el("div", "gantt-guide");
        guide.style.left = "calc(var(--label) + (100% - var(--label)) * " + left / 100 + ")";
        gantt.appendChild(guide);
      }
    }
    years.appendChild(ruler);
    gantt.appendChild(years);

    [2, 3, 4, 5].forEach(function (wp) {
      gantt.appendChild(el("div", "gantt-group wp-" + wp, WP_NAMES[wp]));
      data.activities.filter(function (a) { return a.wp === wp; }).forEach(function (a) {
        var status = statusOf(a.start, a.end);
        var row = el("div", "gantt-row " + status);
        var name = el("div", "name", a.title);
        var dates = a.endLabel ? fmt(parse(a.start)) + " – " + a.endLabel : fmtRange(a.start, a.end);
        name.appendChild(el("small", null, dates + " · " + STATUS_TEXT[status]));
        row.appendChild(name);
        var track = el("div", "track");
        var bar = el("span", "bar");
        var l = pct(parse(a.start).getTime());
        bar.style.left = l + "%";
        bar.style.width = pct(parse(a.end).getTime()) - l + "%";
        bar.style.setProperty("--c", "var(--wp" + wp + ")");
        track.appendChild(bar);
        row.appendChild(track);
        gantt.appendChild(row);
      });
    });

    var t = today.getTime();
    if (t >= from && t <= to) {
      var line = el("div", "gantt-today");
      line.style.left = "calc(var(--label) + (100% - var(--label)) * " + pct(t) / 100 + ")";
      line.appendChild(el("span", null, "Today"));
      gantt.appendChild(line);
    }
  }
})();
