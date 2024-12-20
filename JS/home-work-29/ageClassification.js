function ageClassification(num) {
  return num < 0
    ? null
    : num <= 24
      ? 'Дитинство'
      : num <= 44
        ? 'Молодість'
        : num <= 65
          ? 'Зрілість'
          : num <= 75
            ? 'Старість'
            : num <= 90
              ? 'Довголіття'
              : num <= 122
                ? 'Рекорд'
                : null;
}

module.exports = ageClassification;
