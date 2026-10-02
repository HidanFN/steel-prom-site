"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { searchItems } from "@/lib/search-index";

export function SearchPanel({ initialQuery = "" }: { initialQuery?: string }) {
  const [q, setQ] = useState(initialQuery);
  const results = useMemo(() => searchItems(q), [q]);

  return (
    <div>
      <form
        className="form-field"
        action="/search/"
        method="get"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="site-search-q">Поиск по сайту</label>
        <input
          id="site-search-q"
          name="q"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Например: строп, канат, филиал"
        />
      </form>
      {q.trim().length >= 2 && (
        <p>
          Найдено: <strong>{results.length}</strong>
        </p>
      )}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {results.map((r) => (
          <li key={r.href} style={{ borderBottom: "1px solid var(--line)", padding: "14px 0" }}>
            <small>{r.group}</small>
            <h2 style={{ fontSize: "1.2rem", margin: "4px 0" }}>
              <Link href={r.href}>{r.title}</Link>
            </h2>
            <p>{r.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
