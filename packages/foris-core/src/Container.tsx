import * as react from 'react'

export interface ContainerProps {
  children: React.ReactNode 
}

export const Container = ({ children }: ContainerProps) => (
    <article style={{ background: 'pink' }}>
        {children}
    </article>
)

Container.displayName = 's'


