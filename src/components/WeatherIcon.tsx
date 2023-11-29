interface Props {
  icon: string
}

export default function WeatherIcon({ icon }: Props) {
  return (
    <>
      {icon === 'sunny' &&
        <img src="https://cdn-icons-png.flaticon.com/512/7777/7777317.png" alt="sunny" />
      }
      {icon === 'cloudy' &&
        <img src="https://cdn-icons-png.flaticon.com/512/4089/4089249.png" alt="cloudy" />
      }
      {icon === 'rainy' &&
        <img src="https://cdn-icons-png.flaticon.com/512/4088/4088981.png" alt="rainy" />
      }
    </>
  )
}
