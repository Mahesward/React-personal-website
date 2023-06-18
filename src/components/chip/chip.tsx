import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableChips({ label }: { label: string }) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={label} style={{ color: '#ffb742', backgroundColor: '#32363a' }} />
    </Stack>
  );
}
