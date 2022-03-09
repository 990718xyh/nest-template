export default function changeColor() {
  const color = "\x1b[32m%s";
  console.log(
    color,
    " _   _             _      ___  _____  _____  _     _____",
  );
  console.log(
    color,
    "| \\ | |           | |    |_  |/  ___|/  __ \\| |   |_   _|",
  );
  console.log(
    color,
    "|  \\| |  ___  ___ | |_     | |\\ `--. | /  \\/| |     | |",
  );
  console.log(
    color,
    "| . ` | / _ \\/ __|| __|    | | `--. \\| |    | |     | |",
  );
  console.log(
    color,
    "| |\\  ||  __/\\__ \\| |_ /\\__/ //\\__/ /| \\__/\\| |_____| |_",
  );
  console.log(
    color + "\x1b[0m",
    "\\_| \\_/ \\___||___/ \\__|\\____/ \\____/  \\____/\\_____/\\___/",
  );
}
