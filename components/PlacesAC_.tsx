import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete from "use-places-autocomplete";

interface PlacesAC_Props {}

const PlacesAC_ = ({}: PlacesAC_Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDitBWjNRqs1UN7AR-3EFwqJFV761h56dM',
    // process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  return (
    <Combobox>
      <ComboboxInput
        value={value}
        onChange={(e) => {
          return setValue(e.target.value);
        }}
        // disabled={!ready}
        className={``}
        placeholder={`Search for an address..`}
      />
      <ComboboxPopover>
        <ComboboxList>
          {status == "OK" &&
            data.map(({ place_id, description }) => {
              return <ComboboxOption key={place_id} value={description} />;
            })}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default PlacesAC_;
