/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Represents an address.
 */
export interface Address {
  /**
   * The street address.
   */
  street: string;
  /**
   * The city.
   */
  city: string;
  /**
   * The state.
   */
  state: string;
  /**
   * The zip code.
   */
  zip: string;
}

/**
 * Asynchronously retrieves address information for a given location.
 *
 * @param location The location for which to retrieve address data.
 * @returns A promise that resolves to an Address object containing street, city, state and zip.
 */
export async function getAddress(location: Location): Promise<Address> {
  // TODO: Implement this by calling an API.

  return {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '91234',
  };
}
