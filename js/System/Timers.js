/**Controlam daca a trecut o n secunde de interval*/
export class Tick {
  _time = 0
  _fps = 0
  Fps = 0
  MaxFps = 60
  get deltaTime(){return this.Fps / this.MaxFps}
  /**Daca a trecut intervalul
  * @@param {number} interval peste cit timp intoarcem true
  */
  Update(interval = 500) {
    this._fps++;
    if (performance.now() > this._time + interval) {
      this._time = performance.now()
      this.Fps = this._fps
      this._fps=0
      return true
    }
    return false
  }


}