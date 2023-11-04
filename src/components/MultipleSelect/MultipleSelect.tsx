import { entidadFusionada } from "@/api/enfemedades";
import "@/components/MultipleSelect/MultipleSelect.scss";
import { Contact, Error } from "@/models/InfoAlert";
import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = Array.from(entidadFusionada);
function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
type MultipleSelectChipProps = {
  estado: string[];
  funcHandle: (event: SelectChangeEvent<string[]>) => void;
  alert: string[];
  blur: () => void;
};
export default function MultipleSelectChip({
  estado,
  funcHandle,
  alert,
  blur,
}: MultipleSelectChipProps) {
  const theme = useTheme();

  return (
    <>
      {estado.length > 3 && (
        <>
          <Alert severity="warning" className="alerta-container">
            <div className="alerta">
              {Contact.ABOGADO}
              <button>
                Click aqui para contactar con un abogado de la firma
              </button>
            </div>
          </Alert>
        </>
      )}
      <FormControl className="multiple__select">
        <h2>Seleccione la lesión o enfermedad (máximo 3)*</h2>

        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={estado}
          onBlur={() => blur()}
          onChange={funcHandle}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name[0]}
              id={name[0]}
              value={name[0]}
              style={getStyles(name[1].descripcion, estado, theme)}
            >
              {name[1].descripcion}
            </MenuItem>
          ))}
        </Select>
        <Alert
          severity={
            alert[0] === Error.PERSONNAME
              ? "error"
              : alert[0] === Error.PERSONNAMEVACIO
              ? "error"
              : "success"
          }
        >
          {alert[0]}
        </Alert>
      </FormControl>
    </>
  );
}
