"use client";

import { useMemo, useState } from "react";
import { Clock, MapPin, Navigation, Phone, Search, Store } from "lucide-react";

type Location = {
  id: string;
  name: string;
  badge: string;
  address: string;
  city: string;
  phone?: string;
  hours: string;
  note: string;
  lat?: number;
  lng?: number;
  directionsUrl?: string;
};

const locations: Location[] = [
  {
    id: "lapeer",
    name: "Golden Lair Games Lapeer",
    badge: "Flagship",
    address: "1807 W Genesee St",
    city: "Lapeer, MI 48446",
    phone: "(810) 660-7135",
    hours: "Mon-Fri 2 PM-10 PM, Sat Noon-10 PM, Sun Noon-8 PM",
    note: "Trading cards, weekly events, tournaments, and open play.",
    lat: 43.0509,
    lng: -83.3279,
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=1807%20W%20Genesee%20St%20Lapeer%20MI%2048446"
  },
  {
    id: "grand-blanc",
    name: "Golden Lair Games Grand Blanc",
    badge: "New",
    address: "6309 Dort Hwy",
    city: "Grand Blanc, MI 48439",
    phone: "(810) 344-9375",
    hours: "Open daily from 2 PM",
    note: "Our newest store and hub for Grand Blanc-area trading card and tabletop players.",
    lat: 42.9456,
    lng: -83.6574,
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=6309%20Dort%20Hwy%20Grand%20Blanc%20MI%2048439"
  }
];

type Coordinates = {
  lat: number;
  lng: number;
};

function distanceInMiles(from: Coordinates, to: Coordinates) {
  const radius = 3958.8;
  const toRad = (value: number) => (value * Math.PI) / 180;
  const dLat = toRad(to.lat - from.lat);
  const dLng = toRad(to.lng - from.lng);
  const lat1 = toRad(from.lat);
  const lat2 = toRad(to.lat);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);

  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function LocationFinder() {
  const [query, setQuery] = useState("");
  const [position, setPosition] = useState<Coordinates | null>(null);
  const [status, setStatus] = useState("Search or use your location to compare stores.");

  const rankedLocations = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = locations.filter((location) => {
      if (!normalized) return true;

      return [location.name, location.badge, location.address, location.city, location.note]
        .join(" ")
        .toLowerCase()
        .includes(normalized);
    });

    return filtered
      .map((location) => ({
        ...location,
        distance:
          position && location.lat && location.lng
            ? distanceInMiles(position, { lat: location.lat, lng: location.lng })
            : null
      }))
      .sort((a, b) => {
        if (a.distance === null && b.distance === null) return 0;
        if (a.distance === null) return 1;
        if (b.distance === null) return -1;
        return a.distance - b.distance;
      });
  }, [position, query]);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Your browser does not support location lookup.");
      return;
    }

    setStatus("Checking your location...");
    navigator.geolocation.getCurrentPosition(
      (result) => {
        setPosition({
          lat: result.coords.latitude,
          lng: result.coords.longitude
        });
        setStatus("Sorted by nearest store.");
      },
      () => {
        setStatus("Location access was not available. Search by city or ZIP instead.");
      },
      { enableHighAccuracy: true, maximumAge: 60000, timeout: 10000 }
    );
  };

  return (
    <div className="finder">
      <div className="finder-toolbar">
        <label className="search-field">
          <Search aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search city, ZIP, or store"
            aria-label="Search Golden Lair Games locations"
          />
        </label>
        <button className="button primary" type="button" onClick={requestLocation}>
          <Navigation aria-hidden="true" />
          Use my location
        </button>
      </div>
      <p className="finder-status">{status}</p>
      <div className="location-grid">
        {rankedLocations.map((location, index) => (
          <article className="location-card" key={location.id}>
            <div className="location-card-top">
              <span>{location.badge}</span>
              {location.distance !== null ? (
                <strong>{location.distance.toFixed(1)} mi</strong>
              ) : index === 0 && position ? (
                <strong>Details needed</strong>
              ) : null}
            </div>
            <Store aria-hidden="true" />
            <h3>{location.name}</h3>
            <p className="address">
              <MapPin aria-hidden="true" />
              <span>
                {location.address}
                <br />
                {location.city}
              </span>
            </p>
            <p>
              <Clock aria-hidden="true" />
              <span>{location.hours}</span>
            </p>
            {location.phone ? (
              <p>
                <Phone aria-hidden="true" />
                <span>{location.phone}</span>
              </p>
            ) : null}
            <p className="location-note">{location.note}</p>
            {location.directionsUrl ? (
              <a className="button secondary" href={location.directionsUrl} target="_blank">
                <MapPin aria-hidden="true" />
                Directions
              </a>
            ) : (
              <button className="button secondary" type="button" disabled>
                <MapPin aria-hidden="true" />
                Awaiting address
              </button>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
