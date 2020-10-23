import * as React from "react"

function ProfileIcon(props) {
  return (
    <svg viewBox="0 0 13.26 15" {...props} style={{width: props.width, height:props.height}}>
      <title>{"Recurso 1"}</title>
      <g data-name="Capa 2">
        <path
          d="M6.31 11L3.74 9.48a.49.49 0 01-.24-.42v-3l-3.5-2v6.83a.79.79 0 00.41.7L6.31 15zm3.45-5v3a.49.49 0 01-.24.42L7 11v4l5.9-3.41a.81.81 0 00.41-.7V4.06L9.76 6zM3.9 5.49l2.49-1.43a.46.46 0 01.48 0l2.47 1.42 3.53-2L7 .11a.79.79 0 00-.81 0L.38 3.48z"
          fill={props.color}
          fillRule="evenodd"
          data-name="Capa 1"
        />
      </g>
    </svg>
  )
}

export default ProfileIcon
