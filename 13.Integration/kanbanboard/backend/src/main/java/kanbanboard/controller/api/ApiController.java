package kanbanboard.controller.api;

import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.dto.JsonResult;
import kanbanboard.repository.CardRepository;
import kanbanboard.repository.TaskRepository;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/kanbanboard")
public class ApiController {

	private final CardRepository cardRepository;
	private final TaskRepository taskRepository;

	public ApiController(CardRepository cardRepository, TaskRepository taskRepository) {
		this.cardRepository = cardRepository;
		this.taskRepository = taskRepository;
	}
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<Card>>> cards(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<Task>>> tasks(@RequestParam Long cardNo){
		return ResponseEntity.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAllByCardNo(cardNo)));
	}
	
	@PostMapping("/task")
	public ResponseEntity<Task> addTask(@RequestBody Task task){
		return ResponseEntity.status(HttpStatus.OK)
				.body(taskRepository.insert(task)?task:null);
	}
	
	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult<Map<String, Object>>> updateTask(@PathVariable Long no, @RequestParam String done){
		return ResponseEntity.status(HttpStatus.OK)
				.body(taskRepository.updateDone(no, done)?JsonResult.success(Map.of("no", no, "done", done)): null);
	}
	
	@DeleteMapping("/task/{no}")
	public ResponseEntity<JsonResult<Long>> deleteTask(@PathVariable Long no){
		return ResponseEntity.status(HttpStatus.OK)
				.body(taskRepository.delete(no)?JsonResult.success(no):null);
	}

}
