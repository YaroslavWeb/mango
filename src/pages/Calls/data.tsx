/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from 'react'

import MediaIncoming from 'assets/icons/calls/incoming.svg'
import MediaOutgoing from 'assets/icons/calls/outgoing.svg'
import { T_Column } from 'components/Table'
import { I_Call } from 'models/calls'

export const columns: T_Column<I_Call> = [
  {
    key: 'in_out',
    title: 'Тип',
    render: (value: number) => {
      if (value) {
        return <MediaIncoming />
      } else {
        return <MediaOutgoing />
      }
    },
  },
  {
    key: 'date',
    title: 'Время',
    render: (value: string) => {
      const date = new Date(value)
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`

      return <span>{formattedTime}</span>
    },
  },
  {
    key: 'person_avatar',
    title: 'Сотрудник',
    render: (value: string) => {
      return <img src={value} alt='avatar' />
    },
  },
  { key: 'from_number', title: 'Звонок' },
  { key: 'source', title: 'Источник' },
  { key: null, title: 'Оценка' },
  {
    key: 'time',
    title: 'Длительность',
    render: (value: number, row: I_Call) => {
      if (!value) return <span></span>
      const minutes = Math.floor(value / 60)
      const seconds = value % 60
      const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

      if (row.record && row.partnership_id) {
        const [isPlaying, setIsPlaying] = useState(false)
        const [isDownloaded, setIsDownloaded] = useState(false)

        const audioRef = useRef<HTMLAudioElement>(null)

        const handleGetRecord = async () => {
          const response = await fetch(
            `${import.meta.env.VITE_SERVER_API}mango/getRecord?record=${
              row.record
            }&partnership_id=${row.partnership_id}`,
            {
              method: 'POST',
              headers: {
                Authorization: 'Bearer testtoken',
              },
            },
          )
          if (audioRef.current && response.status === 200) {
            const stream = response.body
            if (stream) {
              const mediaSource = new MediaSource()
              audioRef.current.src = URL.createObjectURL(mediaSource)

              mediaSource.addEventListener('sourceopen', () => {
                const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg')
                stream.pipeTo(
                  new WritableStream({
                    write(chunk) {
                      sourceBuffer.appendBuffer(chunk)
                    },
                    close() {
                      mediaSource.endOfStream()
                      audioRef.current?.play()
                      setIsPlaying(true)
                      setIsDownloaded(true)
                    },
                  }),
                )
              })
            }
          }
        }

        const handlePlayAudio = () => {
          audioRef.current?.play()
          setIsPlaying(true)
        }

        const handlePauseAudio = () => {
          audioRef.current?.pause()
          setIsPlaying(false)
        }

        return (
          <div>
            <div>
              <span>{formattedTime}</span>
              {isPlaying ? (
                <span onClick={handlePauseAudio}>Pause</span>
              ) : (
                <span onClick={isDownloaded ? handlePlayAudio : handleGetRecord}>Play</span>
              )}
              <span>Progress</span>
              <span>Download</span>
            </div>
            <audio ref={audioRef} />
          </div>
        )
      }
      return <span>{formattedTime}</span>
    },
  },
]
